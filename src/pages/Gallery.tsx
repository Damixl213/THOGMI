import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";

interface GalleryImage {
  id: number;
  src: string;
  category: string;
  title: string;
  date: string;
}

const categories = [
  'All',
  'Sunday Service',
  'Tuesday Service',
  'Bible Studies',
  'Events',
  'Latest',
  '365 hallelujah'
  
];

const images: GalleryImage[] = [
  {
    id: 1,
    src: 'https://scontent.flos1-2.fna.fbcdn.net/v/t51.75761-15/475037528_17939767328958139_155831467440561017_n.jpg?stp=dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG47G4ZU5_OEA4IJTSwCPtSBji0LqSwt4gGOLQupLC3iOZ6ZyRRXZddiFaUaV_O2T2-fJ5Cg7iJYIejvwCcQ23I&_nc_ohc=qNJZJcxgRBgQ7kNvgHKm8kR&_nc_oc=AdgDurVZTU7Vyrhtrk1ERwZqDkVw9RUf3MWZoT2KPdyNKQraKD-kjUayzYXQWSmUTzY&_nc_zt=23&_nc_ht=scontent.flos1-2.fna&_nc_gid=APRHeRcduU0o4tLr9ISmn4V&oh=00_AYD-lIeh-VnEWRXGduVrIrtO19lFq1vu02NymBlAePffUw&oe=67C8351C',
    category: 'Sunday Service',
    title: 'Sunday Worship',
    date: '2024-03-10'
  },
  {
    id: 2,
    src: 'https://scontent.flos1-3.fna.fbcdn.net/v/t51.75761-15/476952456_17941372562958139_586606660794522560_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=108&ccb=1-7&_nc_sid=714c7a&_nc_eui2=AeEAGroa56eummwfviFDyzroCf6A_6DdQuAJ_oD_oN1C4K5J0bswOTbINQf7VNOCjw979zk3K50MatwgoWuHnbqI&_nc_ohc=NaGsTL5jEVgQ7kNvgH837Aj&_nc_oc=AdjJwRO7jA82eKu_bqAmgebvY68w_iBtNaduywjAhnPmCsQ79MkMN64quIFAeMm2T5M&_nc_zt=23&_nc_ht=scontent.flos1-3.fna&_nc_gid=A1mWRhEGDPRvX-2dBR5jmKw&oh=00_AYDUa8m_lKzOH3qoTYCbjwZQQma7-savy5_M6pt42LveDw&oe=67C83832',
    category: 'Tuesday Service',
    title: 'Tuesday Prayer Meeting',
    date: '2024-03-05'
  },
  {
    id: 3,
    src: 'https://scontent.flos1-2.fna.fbcdn.net/v/t39.30808-6/470029182_1102532144896982_937528698635876022_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=100&ccb=1-7&_nc_sid=714c7a&_nc_eui2=AeG9Icg_X0xzg-ZrlX6MLCVbPoc-c5TFzyw-hz5zlMXPLJx8mh7tSYL_qFSooHcvcqECDE_MyrBkuryT1mzHDAeS&_nc_ohc=pFi9GxSj8jsQ7kNvgGYnPiR&_nc_oc=Adi9tJrn8V8xCnW-DxNEYtG5tvfhONFwS_wcKf6RoLclAW6LjWgJxOoW_0yE3acWcx4&_nc_zt=23&_nc_ht=scontent.flos1-2.fna&_nc_gid=Ab642Kmjq5H6G1c8A46s2vl&oh=00_AYCDk_SpnCHbRWxbjhANyr46qPo2Vjkj3IgtdnDVJPkoyg&oe=67C813F7',
    category: 'Bible Studies',
    title: 'Bible Study Group',
    date: '2024-03-07'
  },
  {
    id: 4,
    src: 'https://scontent.flos1-2.fna.fbcdn.net/v/t51.75761-15/481360559_17943205937958139_8175696114628168951_n.jpg?stp=c212.0.1016.1016a_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=714c7a&_nc_eui2=AeE-zVLmXcNJqU_Ngqi-f3x7yDvihv_8g2nIO-KG__yDaZBzjN6Q38KUGVBXbo0U7jTK192k8xg4rTIF_8ADQyVN&_nc_ohc=gG1gqH9GNOkQ7kNvgGMEsgQ&_nc_oc=Adji5lbrPS_-c2Sc6neS2fawwcfxFXNsecGQp7sIYlD3Qa7IgJzeOkv4lUCSZ2-cvpI&_nc_zt=23&_nc_ht=scontent.flos1-2.fna&_nc_gid=A1mWRhEGDPRvX-2dBR5jmKw&oh=00_AYAN-3EgYk1E4Efr6ZEfeQfxTcUxDD3gZlKsXlF3t-dHbw&oe=67C80AA6',
    category: 'Tuesday Service',
    title: 'Bible Study Group',
    date: '2024-03-07'
  },
  {
    id: 5,
    src: 'https://scontent.flos1-2.fna.fbcdn.net/v/t51.75761-15/474202399_17939100989958139_3265003424132680111_n.jpg?stp=dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFc6c_NJjSusRAAS6JLKcrNcW8s7uY_0S9xbyzu5j_RLxp5_d9gLrjrFUHTBttR9ccGy5DkwBvAY35AbgnAOB3q&_nc_ohc=B21PuBNJ_TIQ7kNvgGYErqS&_nc_oc=AdgG1UQq-ObQ9S9aPMi_hrZcrEBeKDxPgk5C41IbXXXKTeNM5juXWprW0SZLQvrOohM&_nc_zt=23&_nc_ht=scontent.flos1-2.fna&_nc_gid=AqobYYP7YHYZDiMKVvrELtH&oh=00_AYBwlx4Vv1QhesJzt8e6MB0ir8sdEe0JxcbO3nSYkqeEIQ&oe=67C8108D',
    category: 'Sunday Service',
    title: 'Youth Conference',
    date: '2024-03-01'
  },
  {
    id: 6,
    src: 'https://thogmi.org/media/8472bb2e7af423232415b8b7e588132f.jpg',
    category: 'Latest',
    title: 'Worship Night',
    date: '2024-03-09'
  },
  {
    id: 7,
    src: 'https://scontent.flos1-2.fna.fbcdn.net/v/t51.75761-15/474105441_17939102126958139_8048319877097726535_n.jpg?stp=dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE2DE2gbIMIsthAJfnaNpf1V2uGJho1rpdXa4YmGjWul2oCbI9HCPmaWlmkB6mtV63_SzDqEM8aFpXcaC_c6iHA&_nc_ohc=xb_weKizaSUQ7kNvgFk1o-2&_nc_oc=Adg2cTsIg8qwVUAhhXCaY9vdDYkLCqqD8X_WVZwWAGDp5KCHI0Aj4tfdHVCfovFWAxk&_nc_zt=23&_nc_ht=scontent.flos1-2.fna&_nc_gid=AOaft5oKOi1m-iFH3XkfWrw&oh=00_AYDq9uGhwCKL-APWq9UTyKJcfjdQ8WWa9NMRU4lp1RKdlg&oe=67C80E2A',
    category: 'Sunday Service',
    title: 'Morning Service',
    date: '2024-03-03'
  },
  {
    id: 8,
    src: 'https://scontent.flos1-3.fna.fbcdn.net/v/t51.75761-15/474729108_17939768024958139_1449502568100279039_n.jpg?stp=dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHXQ4pG0aU1QUISaZolG7_vDiGmVxtyoy8OIaZXG3KjL-HSIeVYArv30Trn6kmXKLRzlHe_-Ht5gmi39ZLh_BpX&_nc_ohc=grivkQGGNvcQ7kNvgG3Ynmx&_nc_oc=AdgBt2E9aStNtpKzUvQEBae-J-FkiY6o7x6oxfUZoiYo5xfoJtCKO-AO55x8FeV8XTk&_nc_zt=23&_nc_ht=scontent.flos1-3.fna&_nc_gid=AqUaqmEmSRtLr1QQOps5NUE&oh=00_AYAsFuxiOCms1ORA4zud_6JNr-wyqvxZaLggxH2XEHNozg&oe=67C80CC5',
    category: 'Sunday Service',
    title: 'Morning Service',
    date: '2024-03-03'
  },
  {
    id: 9,
    src: 'https://scontent.flos1-3.fna.fbcdn.net/v/t51.75761-15/475162741_17940513227958139_2958549717614273963_n.jpg?stp=c31.0.1018.1018a_dst-jpg_s206x206_tt6&_nc_cat=102&ccb=1-7&_nc_sid=714c7a&_nc_eui2=AeHS6P5bDpD_CDP3EUExNFfl4YyUQtTQ9TrhjJRC1ND1OstpeK0HgKisDPwRCZI_VY2tT03tqagEG5R8c-UXm7zQ&_nc_ohc=Iw2OxPTF3HMQ7kNvgFU3T2s&_nc_oc=AdggbxqxjZw-vTofpeFRVsGSdlbdXTrPMUMqbjAbCOBO_UWUYrSVs2XFfXxLByytbmE&_nc_zt=23&_nc_ht=scontent.flos1-3.fna&_nc_gid=AALDhdTRbbzuN1DpHx0oorR&oh=00_AYC6twdiEGmg5fiFtPVpDNN3YppEGY481rk4S1mVDRa5rA&oe=67C83040',
    category: 'Events',
    title: 'Community Outreach',
    date: '2024-03-02'
  },
  {
    id: 10,
    src: 'https://scontent.flos1-1.fna.fbcdn.net/v/t39.30808-6/461049716_1047905067026357_8533760618830181452_n.jpg?stp=c0.75.904.904a_dst-jpg_s206x206_tt6&_nc_cat=103&ccb=1-7&_nc_sid=714c7a&_nc_eui2=AeEhhVNCOGqiPfQh_ZHqK7DleecqSOYOn7555ypI5g6fvuFjZbpLXgxILcbLXeAF48rO34T4ase8K1TkjqVVLdvO&_nc_ohc=x-cGkjUUbWMQ7kNvgFTjgF_&_nc_oc=AdipRb5LtXjCBV9wBtE2xZc9IpxV7QI0e2jxw5AqgBlhfoNlqgY7PShmNwrEPTs3ju0&_nc_zt=23&_nc_ht=scontent.flos1-1.fna&_nc_gid=A3i6BMHDfZx6umrmzN81YuU&oh=00_AYA_BC8naYQ5-JoURD76Y15ul433txzwSYOVBcws7-2Bcw&oe=67C81BD3',
    category: 'Bible Studies',
    title: 'Evening Bible Study',
    date: '2024-03-06'
  },
  {
    id: 11,
    src: 'https://scontent.flos1-2.fna.fbcdn.net/v/t51.75761-15/475037528_17939767328958139_155831467440561017_n.jpg?stp=dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG47G4ZU5_OEA4IJTSwCPtSBji0LqSwt4gGOLQupLC3iOZ6ZyRRXZddiFaUaV_O2T2-fJ5Cg7iJYIejvwCcQ23I&_nc_ohc=qNJZJcxgRBgQ7kNvgHKm8kR&_nc_oc=AdgDurVZTU7Vyrhtrk1ERwZqDkVw9RUf3MWZoT2KPdyNKQraKD-kjUayzYXQWSmUTzY&_nc_zt=23&_nc_ht=scontent.flos1-2.fna&_nc_gid=APRHeRcduU0o4tLr9ISmn4V&oh=00_AYD-lIeh-VnEWRXGduVrIrtO19lFq1vu02NymBlAePffUw&oe=67C8351C',
    category: 'Bible Studies',
    title: 'Evening Bible Study',
    date: '2024-03-06'
  },
  {
    id: 12,
    src: 'https://scontent.flos1-2.fna.fbcdn.net/v/t39.30808-6/468622216_1093260469157483_8766653274962963383_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHBWU75kNbAC_v3imvio2jkHzlYcYCeVuYfOVhxgJ5W5n9pUGWELOYZE1zctR0m2IRsnPSdjajrzuYSyK4Fe1Jh&_nc_ohc=k2GyI3FKg5sQ7kNvgFIceRn&_nc_oc=Adj8stGbcDABasMKRW-f1tONzJQEHmqAZ0-ax7ihsPyWpdq6EGUL-9d54nH4ngbd_nc&_nc_zt=23&_nc_ht=scontent.flos1-2.fna&_nc_gid=ALB6nJV9KCOvocbZ8WA3BKl&oh=00_AYBLRyz-kHsu8cQa5eBr1z-q2-9Xh1fNFOV7hfj1Wy1kEw&oe=67C8350F',
    category: 'Events',
    title: 'Anniversary Celebration',
    date: '2024-03-06'
  },
  {
    id: 13,
    src: 'https://scontent.flos1-3.fna.fbcdn.net/v/t39.30808-6/471334789_1120229033127293_4844399272132588596_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE7uNbEJuocUiTvJmZF7akXrFNbiPPtJTCsU1uI8-0lMEkB8umjgRJAWowxDljE-opPoC1U7VWbodRJ0nthgC-J&_nc_ohc=0PvudKYX4wMQ7kNvgGVph8M&_nc_oc=AdjrRn71XxA2J0kWnJVQ5n3KHRFA2rUPLLUnPgZnd8WfBjkvKGNlljkwd3KL3T6HIRY&_nc_zt=23&_nc_ht=scontent.flos1-3.fna&_nc_gid=ARHTI9SKYAV2mgCCzTTt1hz&oh=00_AYD1r_xhsSvQ_xZ5Uqsso69p56j3dl88AGqRFnfB13igOA&oe=67C83E86',
    category: 'Sunday Service',
    title: 'Thanks givien Service',
    date: '2024-03-06'
  },
  {
    id: 14,
    src: 'https://scontent.flos1-3.fna.fbcdn.net/v/t51.75761-15/474550289_17939101889958139_9141115306302165278_n.jpg?stp=dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFt5yKRW5gFsMJ23Obg-RBY63b6LMaOnUPrdvosxo6dQ51ZrY5VMVxrkHMtCAXYN_UgeNV-ckUC5YEeh4TSXQag&_nc_ohc=YD9l9c0WXeQQ7kNvgGSNEU7&_nc_oc=AdhIWeaNejFdFG42aH7q_i2L7Pi0xoo9qcPZYIrMJlqcjPgBMkeZtlh49DLTet5H6Bc&_nc_zt=23&_nc_ht=scontent.flos1-3.fna&_nc_gid=AseX2TodqxXkLKOr_KkHHdU&oh=00_AYBGh2Kw88UNq3N4AejzCsK__COqYDlISeKVjMiWLMsNmA&oe=67C824A1',
    category: 'Sunday Service',
    title: 'Evening Bible Study',
    date: '2024-03-06'
  },
  {
    id: 15,
    src: 'https://scontent.flos1-3.fna.fbcdn.net/v/t51.75761-15/482034651_17943726683958139_8661826332194824978_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=102&ccb=1-7&_nc_sid=714c7a&_nc_eui2=AeFgBV_3rT6LCe6T1HUY3UHWfAHwyHGuDRd8AfDIca4NF_7JYipEv-Lp675RYm_OLZYfTTUggTBoWziPl6PsG0Qn&_nc_ohc=vshdwHnFvIYQ7kNvgGNFj2y&_nc_oc=Adif-Q_2D3LeInuJW5HQowb4_Jjwws-L25rHcWFVaVgFE3SUfSQd0au5Q562SVPXD0o&_nc_zt=23&_nc_ht=scontent.flos1-3.fna&_nc_gid=AQ0ml8a5faUT6NKxiapyXJ7&oh=00_AYBkGQuQIFUqvenDl7fyS6RXvAg_BlNzDNdXJcbKCX0mrA&oe=67C83FE3',
    category: 'Latest',
    title: 'Evening Bible Study',
    date: '2024-03-06'
  },
  {
    id: 16,
    src: 'https://scontent.flos1-2.fna.fbcdn.net/v/t39.30808-6/472782388_1118903633259833_8517703071486474767_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=101&ccb=1-7&_nc_sid=714c7a&_nc_eui2=AeHpjy2L_dpJfo4h2nGQDw85qXqfOPbzk7Gpep849vOTsSOEwQRUYYOtpl7OCpmgTtVYnjv_0x7iaBdMc6FtqEmX&_nc_ohc=6lCTXgDEmBIQ7kNvgFmlGyg&_nc_oc=Adivxch-MWvtGRjOPO1nuRWpHUBezdTy-NRlCtKBmUh5coWIhcVFP8pfg7nBarYN6NU&_nc_zt=23&_nc_ht=scontent.flos1-2.fna&_nc_gid=AgkWzwMLM2VNqqjOxfyycXD&oh=00_AYCIFnt5ih2cW6cY_5ENLnJKp8JuH4FNjDtKeFtoHqJG9g&oe=67C82C5A',
    category: '365 hallelujah',
    title: 'Evening Bible Study',
    date: '2024-03-06'
  },
  {
    id: 17,
    src: 'https://scontent.flos1-3.fna.fbcdn.net/v/t39.30808-6/471317830_1118902329926630_4990270078235012528_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=108&ccb=1-7&_nc_sid=714c7a&_nc_eui2=AeFNhed2VYc8Zpp1TxzhEpW9eN6XCoRBE7543pcKhEETvqgdJmfSg7jreKt-zcHmWOm1ypojTnG_TStuVWq-Ur3j&_nc_ohc=u_b0CcAcJzEQ7kNvgFqGaQ8&_nc_oc=Adg1tGPIOr6tvoWGQg3C2Zq3zp5gRk3nDptih9zPZk0uU4kbkCH9apga3FnG6SeU-gg&_nc_zt=23&_nc_ht=scontent.flos1-3.fna&_nc_gid=AgkWzwMLM2VNqqjOxfyycXD&oh=00_AYB3m6jZN4cwFsNWa8JPjmkYj9yUMTt0vXQUZQLe-wApPQ&oe=67C8305C',
    category: '365 hallelujah',
    title: 'Evening Bible Study',
    date: '2024-03-06'
  },
  {
    id: 18,
    src: 'https://scontent.flos1-1.fna.fbcdn.net/v/t39.30808-6/472752663_1118902309926632_848384305143931827_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=110&ccb=1-7&_nc_sid=714c7a&_nc_eui2=AeHNnVtpx3u5bkuBB3YVBRMZWTUDJPrggq1ZNQMk-uCCrcD_XlnampQCnwSwXmIyNAidqF9p2ipDMlmwJnGU7gcM&_nc_ohc=B3xaYRIan_QQ7kNvgF5BmQm&_nc_oc=AdjL5VZWdhDUeKvEo0r5QdqYh1bW5AXzUC_PAhscw_3ogPdRbFpdVvUJgACIUbv2mlQ&_nc_zt=23&_nc_ht=scontent.flos1-1.fna&_nc_gid=ATbCH0YmhzcUpiaDD-QWlUO&oh=00_AYClRjsun29ghCyCE59r9gXeLfjnlCFyzfSu2Z1K5-kMcw&oe=67C83083',
    category: '365 hallelujah',
    title: 'Evening Bible Study',
    date: '2024-03-06'
  },
  {
    id: 19,
    src: 'https://scontent.flos1-2.fna.fbcdn.net/v/t39.30808-6/472753469_1118902266593303_5763375255652494031_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=104&ccb=1-7&_nc_sid=714c7a&_nc_eui2=AeG0_ro8U5wDMdMub2at34vwCHYxkz1xJcMIdjGTPXElw_Tz40ADoiQSmHQw6iQBc6MRxYIFA8pJhiu6g9Q7B99U&_nc_ohc=jMZvSnh_Ee8Q7kNvgFU2TUB&_nc_oc=Adim7uZvj-DAGrQIBBsPIWmNVxvBSmp86-6CgFJxs6dXIzI0iq-l0m89RONg5vP0GcE&_nc_zt=23&_nc_ht=scontent.flos1-2.fna&_nc_gid=ATbCH0YmhzcUpiaDD-QWlUO&oh=00_AYAJSaArM8aGbBBcV8DB-VZF9vHW_pB-zS3yVgZCGWbnYA&oe=67C82FB8',
    category: '365 hallelujah',
    title: 'Evening Bible Study',
    date: '2024-03-06'
  },
  {
    id: 20,
    src: 'https://scontent.flos1-1.fna.fbcdn.net/v/t39.30808-6/471720192_1118903623259834_8381915052679338036_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=106&ccb=1-7&_nc_sid=714c7a&_nc_eui2=AeHMSijB_CoeSk64Hvp1ez77aAYBfdjPPXloBgF92M89eVE9n0Zlp89V7K7MuoKTL6TWhjMxZnkS_KGKQissqrDt&_nc_ohc=WVdBJEJyKKcQ7kNvgFpTF4J&_nc_oc=Adj_uStG1Jyk1tyW3Y7hS7JomacjQdePvMHzjhyjEbhjf8tXHiJQoIMJek37UYS8mWk&_nc_zt=23&_nc_ht=scontent.flos1-1.fna&_nc_gid=AehAP1PIElZ1aAxqI2GK4Nm&oh=00_AYC4JpMliJmt-5vS_32IiA8rMtd-LasDG90t6wtE41d_Dw&oe=67C81C6E',
    category: '365 hallelujah',
    title: 'Evening Bible Study',
    date: '2024-03-06'
  },
  {
    id: 21,
    src: 'https://scontent.flos1-2.fna.fbcdn.net/v/t39.30808-6/468329415_1096116462205217_5809043592926808787_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHPCQ5rS7XItt80Nj2WWo1l7JmUYFxWsO3smZRgXFaw7YpAIV_gIgsBE9SZXqftIutVMw2om91ygSWkYHEzQERV&_nc_ohc=ovivXKfaJWgQ7kNvgHo6gpf&_nc_oc=Adj6QQdAOydNL3cBDiypl2yR3R6ynhzZr-2TjDjhVK4oaLDmK0yyRPW1JRsTYscIk8A&_nc_zt=23&_nc_ht=scontent.flos1-2.fna&_nc_gid=AzC1BSvRw7Oc7b-1vsOagrv&oh=00_AYAiJ_cCJyxgZK951W8w0qL8RbaXA77gxQuXygShoyO2PA&oe=67C82524',
    category: 'Tuesday Service',
    title: 'Evening Bible Study',
    date: '2024-03-06'
  },
  {
    id: 22,
    src: 'https://scontent.flos1-2.fna.fbcdn.net/v/t39.30808-6/468532037_1098881511928712_7141526386592439609_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEjtPFFTR_y0BB2l6Jf6cJ3cCZoSn5h5vxwJmhKfmHm_AKiOPbld242VCkwWB9LtjmYXHwanAW-itWJuajTWBBQ&_nc_ohc=BK37CTRIupMQ7kNvgGepm_8&_nc_oc=Adhneomz9YiKZQAZBipa-daGjWrBgEbjQzKOfLRVJOwhbenKDwHhGSlIXl--Eol1z88&_nc_zt=23&_nc_ht=scontent.flos1-2.fna&_nc_gid=AEBvk1Sq1FdPUbN4g7qRnpw&oh=00_AYAMSiGTBozop-4kY4dy_8_-z8FaqhY5Oad--UsiooorZg&oe=67C8181B',
    category: 'Sunday Service',
    title: 'Thanks givien Service',
    date: '2024-03-06'
  },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const filteredImages = selectedCategory === 'All'
    ? images
    : images.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen bg-gray-50 dark:text-white dark:bg-gray-900 text-center "
    >
      <div className="max-w-7xl mx-auto dark:text-white dark:bg-gray-900 text-center">
        <h1 className="text-4xl font-bold text-center mb-8 dark:text-white text-center">Our Gallery</h1>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 ">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors dark:text-white dark:bg-gray-600 text-center" ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-indigo-50'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                onClick={() => openLightbox(index)}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="aspect-w-16 aspect-h-9"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300">
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-xl font-semibold mb-2">{image.title}</h3>
                    <p className="text-white text-sm">{image.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={selectedImageIndex}
          slides={filteredImages.map(img => ({ src: img.src }))}
        />
      </div>
    </motion.div>
  );
}