import { useState, useEffect } from 'react'


const Use_Effect_API = () => {

    const [userList, setUserList] = useState([])

    console.log(userList);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((item) => setUserList(item))
    }, [])

    return (
        <div>
            <table>
                <tr>
                    {
                        userList.map((any) => {
                            return <>
                                <div>{any.title}</div>
                            </>
                        })
                    }
                </tr>
            </table>
        </div>
    )
}

export default Use_Effect_API
