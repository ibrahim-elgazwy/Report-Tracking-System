import React from 'react';
import { connect } from 'react-redux';
import { roles } from '../../enums/roles';
import FinanceEmployee from '../finance/financeEmployee';
import FinanceSupervisor from '../finance/financeSupervisor';
import HrEmployee from '../hr/hrEmployee';
import HrSupervisor from '../hr/hrSupervisor';
import LegalEmployee from '../legal/legalEmployee';
import LegalSupervisor from '../legal/legalSupervisor';

const Home = ({user, history}) => {
    function showDepartmentReport ()  {
        if(!user) return history.replace('/login');
        const role = user.role;
        switch (role) {
            case roles.HR_EMPLOYEE:
                return <HrEmployee />
            case roles.HR_SUPERVISOR:
                return <HrSupervisor />
            case roles.FINANCE_EMPLOYEE:
                return <FinanceEmployee />
            case roles.FINANCE_SUPERVISOR:
                return <FinanceSupervisor />
            case roles.LEGAL_EMPLOYEE:
                return <LegalEmployee />
            case roles.LEGAL_SUPERVISOR:
                return <LegalSupervisor />
        }
    }

    return ( 
        <React.Fragment>
            {showDepartmentReport()}
        </React.Fragment>
     );
}

const mapStateToProps = state => ({
    user: state.user.user
});

export default connect(mapStateToProps, null)(Home);