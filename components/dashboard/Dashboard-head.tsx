'use client'

import {Navigation_top} from "@/components/dashboard/Navigation-top";
import styled, {createGlobalStyle} from 'styled-components';
import * as React from "react";
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playwrite+CZ:wght@100..400&display=swap');

  .logo-font {
    font-family: 'Playwrite CZ', cursive;
    font-weight: 400; /* 根据需要调整权重 */
    font-style: italic; /* 你也可以设置为italic */
    
  }
  

`;

export default function DashboardHead() {
    return (
        <>
            <GlobalStyle/>
            <div className='logo-font font-bold text-2xl'>
                Health & Beauty Spa
            </div>
            <div className="flex items-center space-x-4">
                <Navigation_top/>
            </div>
        </>
    )
}