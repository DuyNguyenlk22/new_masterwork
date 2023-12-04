import React from "react";
import { ConfigProvider, FloatButton } from "antd";

export default function BackToTop() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorBgElevated: "#dc4f72",
            colorFillContent: "#961040",
          },
        }}>
        <FloatButton.BackTop
          duration={1000}
          shape='square'
          icon={
            <i className='fa-solid fa-angle-up text-white font-semibold'></i>
          }
        />
      </ConfigProvider>
    </>
  );
}
