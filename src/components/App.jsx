import { Profile } from '../components/Profile/Profile.jsx';
import { Statistics } from '../components/Statistics/Statistics.jsx';
import { GlobalStyle } from 'components/Globalstyle.js';
import { Layout } from './Layout.js';
import user from '../data/user.json';
import data from '../data/data.json';


export const App = () => {
  return (
    <Layout>
      <GlobalStyle/>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" items={data} />
    </Layout>
  );
};
