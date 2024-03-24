import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useEffect, useState, useCallback } from 'react';
import { useModel } from '@umijs/max';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  const [msg, setMsg] = useState('');
  
  useEffect(() => {
    if (window.backend) {
      window.backend.sendMessage('window.isInit', Math.random());

      window.backend.listenMessage('main.call', (...data: any) => {
        console.log(data);
        setMsg('hello world');
      });
    }
  }, []);

  const callBackend = useCallback(() => {
    window.backend.sendMessage('window.call', Math.random());
  }, []);

  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
      </div>
      <Button onClick={callBackend}>点我一下</Button>
      <div>{msg}</div>
    </PageContainer>
  );
};

export default HomePage;
