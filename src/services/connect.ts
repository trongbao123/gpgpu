import { request } from "@component/configs/axios";

const connect = async (options?: any) => {
    const data = await request({
        method: "POST",
        url: `/device/connect`,
        ...options,
    });
    return data;
};

export { connect };