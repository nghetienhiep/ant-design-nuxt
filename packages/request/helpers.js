import notification from 'ant-design-vue/lib/notification';

export const clientRequest = {
    get: async (store, apiUrl, params) => {
        try {
            return successRequest(
                await store.$axios.get(apiUrl, {
                    params,
                })
            );
        } catch (e) {
            return errorRequest(e);
        }
    },
    post: async (store, apiUrl, body) => {
        try {
            return successRequest(await store.$axios.post(apiUrl, body));
        } catch (e) {
            return errorRequest(e);
        }
    },
    put: async (store, apiUrl, body) => {
        try {
            return successRequest(await store.$axios.put(apiUrl, body));
        } catch (e) {
            return errorRequest(e);
        }
    },
    delete: async (store, apiUrl) => {
        try {
            return successRequest(await store.$axios.delete(apiUrl));
        } catch (e) {
            return errorRequest(e);
        }
    },
};

const output = (data = null, error = null) => {
    return {
        data,
        error,
    };
};

const successRequest = (result) => {
    return statusCheck(result);
};

const errorRequest = (error) => {
    if (error.response) {
        return statusCheck(error.response);
    } else {
        notification.error({
            message: error.toString(),
        });
    }
};

const statusCheck = (result) => {
    try {
        const { status, statusText } = result;
        if (status === 200) {
            return output(result.data);
        } else if (status === 400) {
            return output(null, result);
        } else if (status === 401) {
            return output(null, result);
        } else if (status === 403) {
            return output(null, result);
        } else if (status === 404) {
            notification.error({
                message: statusText,
            });
            return output(null, result);
        } else if (status === 500) {
            return output(null, result);
        }
    } catch (e) {}
};
