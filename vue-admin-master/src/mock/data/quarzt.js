import Mock from 'mockjs';
const LoginUsers = [
    {
        id: 1,
        username: 'admin',
        password: '123456',
        avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
        name: '张某某'
    }
];

const Quartzs = [];

for (let i = 0; i < 86; i++) {
    Quartzs.push(Mock.mock({
        jobId: Mock.Random.guid(),
        jobName:"ryTask",
        jobGroup:"系统默认（无参）",
        funName:"ryTask",
        funParams:"ryNoParams",
        regex:"0/10 * * *？",
        jobState:" 运行",
        createTime: new Date(),


    }));
}

export { LoginUsers, Quartzs };
