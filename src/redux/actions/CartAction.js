import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        itemForOrder: [],
    },
    reducers: {
        setCart: (state, action) => {
            // Thay đổi trực tiếp state.items
            state.items = action.payload; // Cập nhật danh sách sản phẩm trong giỏ hàng
        },
        setQuantity: (state, action) => {
            // Thay đổi trực tiếp state.totalQuantity
            state.totalQuantity = action.payload; // Cập nhật tổng số lượng sản phẩm
        },
        setItemForOrder: (state, action) => {
            state.itemForOrder = action.payload;
        },
    },
});

// Xuất các action để sử dụng trong components
export const { setCart, setQuantity, setItemForOrder } = cartSlice.actions;

// Xuất reducer để sử dụng trong store
export default cartSlice.reducer;
