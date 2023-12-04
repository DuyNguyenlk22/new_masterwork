import { Collapse, ConfigProvider } from "antd";
import React from "react";

let data = [
  { title: "There are many passages but the majority?" },
  { title: "Sed ut perspiciatis unde omnis?" },
  { title: "At vero eos iusto odio ducimus qui?" },
  { title: "We denounce with righteous?" },
  { title: "perspiciatis unde omnis?" },
  { title: "At vero eos iusto odio ducimus qui?" },
];

export default function General() {
  const customExpandIcon = (panelProps) => {
    const { isActive } = panelProps;
    return (
      <>
        {isActive ? (
          <i className='fa-solid fa-angle-up font-bold'></i>
        ) : (
          <i className='fa-solid fa-angle-down font-bold'></i>
        )}
      </>
    );
  };
  return (
    <section className='general py-24 bg-[#F7F9FC]'>
      <div className='container'>
        <div className='general_title max-w-[750px] m-auto text-center'>
          <p className='color-pink font-bold mb-[5px]'>QUESTIONS AND ANSWERS</p>
          <h2 className='text-[46px] font-bold color-title leading-[1]'>
            General FAQs
          </h2>
          <span className='my-4'>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus turpis
            sodales quis. Integer sit amet mattis quam.
          </span>
        </div>
        <div className='general__content flex mt-12'>
          <div className='imgHover w-[40%] mr-10'>
            <img src='./image/women.jpg' className='rounded' alt='...' />
          </div>
          <div className='w-[60%]'>
            {data.map((item, index) => {
              return (
                <div key={`item${index}`} className={index > 0 ? "mt-5" : " "}>
                  <ConfigProvider
                    theme={{
                      components: {
                        Collapse: {
                          headerBg: "#fff",
                        },
                      },
                    }}>
                    <Collapse
                      expandIconPosition='end'
                      size='large'
                      bordered={false}
                      style={{
                        border: "1px solid #eee",
                        padding: "10px 8px",
                      }}
                      items={[
                        {
                          key: index + 1,
                          label: <h3 className='text-xl'>{item.title}</h3>,
                          children: (
                            <p>
                              Voluptates amet earum velit nobis aliquam
                              laboriosam nihil debitis facere voluptatibus
                              consectetur quae quasi fuga, ad corrupti libero
                              omnis sapiente non assumenda, incidunt officiis
                              eaque iste minima autem.
                            </p>
                          ),
                        },
                      ]}
                      expandIcon={customExpandIcon}
                    />
                  </ConfigProvider>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
