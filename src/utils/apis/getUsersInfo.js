import END_POINT from './END_POINT';

const getUsersInfo = async(token) => {
    const url = END_POINT + '/users';
    const config = {
        headers: {
            'Authorization' : 'Bearer ' + token,
        },
    }

    try {
        const res = await fetch(url, config);
        console.log(res);
        if (!res.ok)
            throw new Error('유저 데이터 요청 실패');
        return await res.json();
    } catch(e) {
        console.log(e);
        alert(e);
    }
}

export default getUsersInfo;