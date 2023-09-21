import {useSelector} from "react-redux";
import { shopIns} from "../../../api/shopInstance";
import { bringByCategory, cleanEverything, deatailView, getItems, handleShopList, itemDetail, itemsAdded, removeItem, startLoading } from "./shopSlice"

 

export const fillShop = () => {
    return async (dispatch) => {
        dispatch(startLoading());

        const { data } = await shopIns.get('/products')
        

        dispatch(getItems(data))
    }
}

export const getItemsByCategory = ( category ) => {
    return async ( dispatch ) => {
        dispatch( startLoading() )

        const { data } = await shopIns.get(`/products/?categoryId=${category}`);

        dispatch( bringByCategory(data))
    }
}

export const getItemDetail = ( id ) => {
    return async ( dispatch ) => {
        const { data } = await shopIns.get(`/products/${id}`);

        dispatch( itemDetail( data ) )
        dispatch( deatailView( true ))
    } 
}

export const closeDetail = (value) => {
    return async ( dispatch ) => {
        dispatch( deatailView(value))
    }
}

export const addItems = ( id ) => {
    return async ( dispatch ) => {
        const { data } = await shopIns.get(`/products/${ id }`)
        
        dispatch( itemsAdded( data ) )
    }
}

export const openShopList = ( value ) => {
    return async ( dispatch ) => {
        dispatch( handleShopList(value) )
    }
}

export const removeCartItem = ( id ) => {
    return async ( dispatch ) => {
        dispatch( removeItem( id ))
    }
}

export const cleanShoppingCart = () => {
  return async (dispatch) => {
    dispatch(cleanEverything())
  };
};


