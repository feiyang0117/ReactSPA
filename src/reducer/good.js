const goods = (state, action) => {
    switch (action.type) {
        case 'GET_GOODS':
            return {
                ...state,
                data: action.payload
            };
        // 其他action处理……
    }
}
