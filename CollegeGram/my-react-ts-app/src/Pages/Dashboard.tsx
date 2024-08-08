import { useState } from "react";
import logoSvg from "../assets/RahnemaLogo.svg";
import addSvg from "../assets/add_circle.svg";
import myPageSvg from "../assets/pin.svg";
import bookmarkSvg from "../assets/bookmark.svg";
import searchSvg from "../assets/search.svg";
import tagSvg from "../assets/tag.svg";
import messageSvg from "../assets/message.svg";
import notificationSvg from "../assets/notification.svg";
import overviewSvg from "../assets/overview.svg";
import hamburgerSvg from "../assets/hamburger.svg";
import profilePic from "../assets/profilePic.png";

function Dashboard() {
  return (
    <>
      <div className="px-12 bg-neutral-100 w-full">
        <div className="flex flex-row items-center justify-evenly h-screen gap-16">
          <div className="max-w-[304px] min-w-[304px]  h-screen flex flex-col items-center gap-10 pt-12 border">
            <div className="my-4 mx-8">
              <button className="w-full py-4 px-8 flex justify-center items-center gap-2 bg-[#EA5A69] rounded-full">
                <span className="text-base">ایجاد پست جدید</span>
                <img src={addSvg} alt="" className="size-[16px]" />
              </button>
            </div>
            <div className="bg-white w-full h-full rounded-t-3xl border flex flex-col">
              <div className="border-b py-6">
                <div className="flex justify-start items-center gap-4 px-8 py-4">
                  <img
                    src={profilePic}
                    alt=""
                    className="size-12 rounded-full object-cover"
                  />
                  <span className="text-black">mahmz</span>
                </div>
                <div className="flex justify-start text-black items-center gap-2 px-8 py-4">
                  <img src={myPageSvg} alt="" className="size-4" />
                  <span className="">صفحه من</span>
                </div>
                <div className="flex justify-start text-black items-center gap-2 px-8 py-4 bg-[#F2F2F7] rounded-full">
                  <img src={bookmarkSvg} alt="" className="size-4" />
                  <span className="">ذخیره‌ها</span>
                </div>
                <div className="flex justify-start text-black items-center gap-2 px-8 py-4">
                  <img src={messageSvg} alt="" className="size-4" />
                  <span className="">پیام‌ها</span>
                </div>
                <div className="flex justify-start text-black items-center gap-2 px-8 py-4">
                  <img src={notificationSvg} alt="" className="size-4" />
                  <span className="">اعلانات</span>
                </div>
                <div className="flex justify-start text-black items-center gap-2 px-8 py-4">
                  <img src={tagSvg} alt="" className="size-4" />
                  <span className="">تگ‌شده‌ها</span>
                </div>
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex flex-col">
                  <button className="flex justify-start text-black items-center gap-2 px-8 py-4">
                    <img src={overviewSvg} alt="" className="size-4" />
                    <span className="">اکسپلور</span>
                  </button>
                  <button className="flex justify-start text-black items-center gap-2 px-8 py-4">
                    <img src={searchSvg} alt="" className="size-4" />
                    <span className="">جستجو</span>
                  </button>
                </div>
                <div className=" flex flex-col flex-1  justify-end">
                  <button className="flex justify-end items-center gap-2 px-8 py-4">
                    <span className="">بیشتر</span>
                    <img src={hamburgerSvg} alt="" className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 h-screen">
            <div className="my-4 mx-8 pt-12 flex justify-end">
              <img src={logoSvg} className="size-20" />
            </div>
            <div className="w-full pb-9 border-b">
              <div className="text-[#191919] flex justify-start pb-9 font-bold">
                <span>صفحه من</span>
              </div>
              <div className="flex justify-between">
                <div className=" w-full flex flex-row justify-between">
                  <div className="flex justify-between gap-10">
                    <img
                      src={profilePic}
                      alt=""
                      className="size-32 object-cover rounded-full"
                    />
                    <div className=" flex flex-col justify-between">
                      <p className="text-yellow-600 text-sm">mahmz@</p>
                      <p className="text-[#587052] text-xl">مهشید منزه</p>
                      <ul className="flex text-xs gap-2 text-[#17494D]">
                        <li className="flex gap-1 border-l px-1 border-[#17494D]">
                          <span>13</span>
                          <span>دنبال کننده</span>
                        </li>
                        <li className="flex gap-1 border-l px-1 border-[#17494D]">
                          <span>7</span>
                          <span>دنبال شونده</span>
                        </li>
                        <li className="flex gap-1 px-1">
                          <span>19</span>
                          <span>پست</span>
                        </li>
                      </ul>
                      <p className="text-[#A5A5A5]">
                        Lover, not a fighter, spreading ✌️all over the 🌎
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div>
                      <button className="py-4 px-8 flex justify-center items-center gap-2 bg-[#EA5A69] rounded-full text-white">
                        <span>ویرایش پروفایل</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Posts */}
            <div className="w-full  mt-9 border flex-1 rounded-3xl rounded-b-none  text-[#17494D] flex flex-col justify-center items-center gap-2">
              <p className="text-xl">هنوز هیچ پستی توی صفحه‌ات نذاشتی!</p>
              <p className="text-xl">بجنب تا دیر نشده</p>
              <div>
                <button className="py-4 px-8 flex justify-center items-center gap-2 bg-[#EA5A69] rounded-full text-white">
                  <span>ایجاد پست جدید</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
