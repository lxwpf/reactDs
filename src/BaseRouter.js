import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Analyse from './menu/dashboard/analyse';
import Monitoring from "./menu/dashboard/monitoring";
import Workbench from "./menu/dashboard/workbench";
import BaseTable from "./menu/table/baseTable";
import DistributionTable from "./menu/table/distributionTable";
import ScatterTable from "./menu/table/scatterTable";
import CardList from "./menu/list/cardList";
import QueryList from "./menu/list/queryList";
import SearchList from "./menu/list/searchList";
import StandardList from "./menu/list/standardList";
import BaseDetail from "./menu/detail/baseDetail";
import HighDetail from "./menu/detail/highDetail";
import FailPage from "./menu/result/failPage";
import SuccessPage from "./menu/result/successPage";
import Error403 from './menu/error/403';
import Error404 from './menu/error/404';
import Error500 from './menu/error/500';

const BaseRouter = () => {
    return (
        <main>
            <Switch>
            <Route exact path="/" component={Analyse}/>
            <Route exact path="/analyse" component={Analyse}/>
            <Route exact path="/monitoring" component={Monitoring}/>
            <Route exact path="/workbench" component={Workbench}/>
            {/*表单页路由*/}
            <Route exact path="/baseTable" component={BaseTable}/>
            <Route exact path="/distributionTable" component={DistributionTable}/>
            <Route exact path="/scatterTable" component={ScatterTable}/>
            {/*列表页路由,查询表格，标准列表，卡片列表，搜索列表*/}
            <Route exact path="/queryList" component={QueryList}/>
            <Route exact path="/standardList" component={StandardList}/>
            <Route exact path="/cardList" component={CardList}/>
            <Route exact path="/searchList" component={SearchList}/>
            {/*详情页路由，基础详情页，高级详情页*/}
            <Route exact path="/baseDetail" component={BaseDetail}/>
            <Route exact path="/highDetail" component={HighDetail}/>
            {/*返回结果页面，成功，失败*/}
            <Route exact path="/fail" component={FailPage}/>
            <Route exact path="/success" component={SuccessPage}/>
            {/*错误响应页面，403 404 500*/}
            <Route exact path="/403" component={Error403}/>
            <Route exact path="/404" component={Error404}/>
            <Route exact path="/500" component={Error500}/>
        </Switch>
        </main>
    )
}
/*class BaseRouter extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/" component={Analyse}/>
                    <Route exact path="/analyse" component={Analyse}/>
                    <Route exact path="/monitoring" component={Monitoring}/>
                    <Route exact path="/workbench" component={Workbench}/>
                </Switch>
            </main>
        )
    }
}*/

export default BaseRouter;