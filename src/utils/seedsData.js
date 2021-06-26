import { reportStatus } from "../enums/reportStatus";

const hrReports = [
    {
        id: 1,
        title: "hr report one",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, ducimus!",
        status: reportStatus.NEW,
        createdAt: "10-6-2021",
        rejectedReason: ""
    },
    {
        id: 2,
        title: "hr report two",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, ducimus!",
        status: reportStatus.NEW,
        createdAt: "11-6-2021",
        rejectedReason: ""
    },
    {
        id: 3,
        title: "hr report three",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, ducimus!",
        status: reportStatus.REJECTED,
        createdAt: "12-6-2021",
        rejectedReason: "Need More Details"
    },
    {
        id: 4,
        title: "hr report four",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, ducimus!",
        status: reportStatus.REJECTED,
        createdAt: "13-6-2021",
        rejectedReason: "Need More Details"
    },
    {
        id: 5,
        title: "hr report five",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, ducimus!",
        status: reportStatus.ACCEPTED,
        createdAt: "14-6-2021",
        rejectedReason: ""
    },
    {
        id: 6,
        title: "hr report six",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, ducimus!",
        status: reportStatus.ACCEPTED,
        createdAt: "15-6-2021",
        rejectedReason: ""
    },
    {
        id: 7,
        title: "hr report sephen",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, ducimus!",
        status: reportStatus.DELIVERED,
        createdAt: "16-6-2021",
        rejectedReason: ""
    },
    {
        id: 8,
        title: "hr report eight",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, ducimus!",
        status: reportStatus.DELIVERED,
        createdAt: "17-6-2021",
        rejectedReason: ""
    }
]

const financeReports = [
    {
        id: 1,
        title: "finance report one",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, ducimus!",
        status: reportStatus.NEW,
        createdAt: "10-6-2021",
        rejectedReason: ""
    },
    {
        id: 2,
        title: "finance report two",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, ducimus!",
        status: reportStatus.NEW,
        createdAt: "11-6-2021",
        rejectedReason: ""
    },
    {
        id: 3,
        title: "finance report three",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, ducimus!",
        status: reportStatus.REJECTED,
        createdAt: "12-6-2021",
        rejectedReason: "Need More Details"
    },
    {
        id: 4,
        title: "finance report four",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, ducimus!",
        status: reportStatus.REJECTED,
        createdAt: "13-6-2021",
        rejectedReason: "Need More Details"
    },
    {
        id: 5,
        title: "finance report five",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, ducimus!",
        status: reportStatus.ACCEPTED,
        createdAt: "14-6-2021",
        rejectedReason: ""
    },
    {
        id: 6,
        title: "finance report six",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, ducimus!",
        status: reportStatus.ACCEPTED,
        createdAt: "15-6-2021",
        rejectedReason: ""
    },
    {
        id: 7,
        title: "finance report sephen",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, ducimus!",
        status: reportStatus.DELIVERED,
        createdAt: "16-6-2021",
        rejectedReason: ""
    },
    {
        id: 8,
        title: "finance report eight",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, ducimus!",
        status: reportStatus.DELIVERED,
        createdAt: "17-6-2021",
        rejectedReason: ""
    }
]

const legalReports = [
    {
        id: 1,
        title: "legal report one",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, ducimus!",
        status: reportStatus.NEW,
        createdAt: "10-6-2021",
        rejectedReason: ""
    },
    {
        id: 2,
        title: "legal report two",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, ducimus!",
        status: reportStatus.NEW,
        createdAt: "11-6-2021",
        rejectedReason: ""
    },
    {
        id: 3,
        title: "legal report three",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, ducimus!",
        status: reportStatus.REJECTED,
        createdAt: "12-6-2021",
        rejectedReason: "Need More Details"
    },
    {
        id: 4,
        title: "legal report four",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, ducimus!",
        status: reportStatus.REJECTED,
        createdAt: "13-6-2021",
        rejectedReason: "Need More Details"
    },
    {
        id: 5,
        title: "legal report five",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, ducimus!",
        status: reportStatus.ACCEPTED,
        createdAt: "14-6-2021",
        rejectedReason: ""
    },
    {
        id: 6,
        title: "legal report six",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, ducimus!",
        status: reportStatus.ACCEPTED,
        createdAt: "14-6-2021"
    },
    {
        id: 7,
        title: "legal report sephen",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, ducimus!",
        status: reportStatus.DELIVERED,
        createdAt: "15-6-2021",
        rejectedReason: ""
    },
    {
        id: 8,
        title: "legal report eight",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, ducimus!",
        status: reportStatus.DELIVERED,
        createdAt: "16-6-2021",
        rejectedReason: ""
    }
]

export function getHrReports(){
    const reports = localStorage.getItem('hrReports');
    return reports ? JSON.parse(reports) : hrReports;
}

export function getFinanceReports(){
    const reports = localStorage.getItem('financeReports');
    return reports ? JSON.parse(reports) : financeReports;
}

export function getLegalReports(){
    const reports = localStorage.getItem('legalReports');
    return reports ? JSON.parse(reports) : legalReports;
}

export function getLoginUser(){
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : "";
}

