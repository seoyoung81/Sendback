'use client'

import { useEffect } from "react";
import { kakaoLogInAPI } from "@component/api/kakaoGetAPI";

export const KakaoCallBack = () => {

    let code: string = ""
    // URL에서 'code' 쿼리 파라미터 추출
    if (typeof window !== 'undefined') {
        code = new URL(window.location.href).searchParams.get('code') || "";
    }
    
    const getKakaoLogIn = async () => {
        await kakaoLogInAPI
            .getKakaoLogIn(code)
            .then((response: any) => {
                console.log('response', response)
                const access_token: string = response.data.data.accessToken;
                const refresh_token: string = response.data.data.refreshToken;
                window.sessionStorage.setItem("access_token", access_token);
                window.sessionStorage.setItem("refresh_token", refresh_token);

            })
            .catch((err: any) => {
                console.log('error', err)
            })
    }

    useEffect(() => {
        getKakaoLogIn()
    }, [])

    return <div>로딩중</div>
}

export default KakaoCallBack;