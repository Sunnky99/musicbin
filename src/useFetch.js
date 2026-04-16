import { useState, useEffect } from "react";
import { supabase } from './supabaseClient'; 

const useFetch = (tableName) => {
    const [data, setData] = useState(null);
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setPending(true);
            
            // 使用 Supabase 查询
            const { data, error } = await supabase
                .from(tableName)
                .select('*');

            if (error) {
                setError('无法获取数据: ' + error.message);
                setData(null);
            } else {
                setData(data);
                setError(null);
            }
            setPending(false);
        };

        fetchData();
    }, [tableName]); // 当表名改变时重新抓取

    return { data, isPending, error };
}

export default useFetch;