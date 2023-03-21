import { Profile } from '../components/Profile/Profile.jsx';
import { Statistics } from '../components/Statistics/Statistics.jsx';
import { GlobalStyle } from 'components/Globalstyle.js';
import { Layout } from './Layout.js';
import { FriendList } from './FriendsList/FriendsList.jsx';
import {TransactionHistory} from './Transactions/TransactionHistory.jsx'
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json'

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
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </Layout>
  );
};
