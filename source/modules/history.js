import { useRouterHistory } from 'react-router';
import { createHistory } from 'history';


const browserHistory = useRouterHistory(createHistory)({});


export default browserHistory;