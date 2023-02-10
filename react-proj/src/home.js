import NavBar from './navbar'
import UserTable from './userTable.tsx'
import { useEffect, useState } from 'react'


function HomePage() {
    const [items, setItems] = useState([{ key: "1", name: "John Brown", age: 32, address: "New York No. 1 Lake Park", }, { key: "2", name: "Joe Black", age: 42, address: "London No. 1 Lake Park", }, { key: "3", name: "Jim Green", age: 32, address: "Sydney No. 1 Lake Park", }, { key: "4", name: "Jim Red", age: 32, address: "London No. 2 Lake Park", },]);

    useEffect(() => {
        localStorage.setItem('userData', JSON.stringify(items));
    }, [items]);


    return (
        <>
            <NavBar />

            <UserTable />
        </>
    );
}

export default HomePage