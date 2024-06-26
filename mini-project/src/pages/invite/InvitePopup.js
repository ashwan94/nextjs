export default function InvitePopup({ onClose }) {
  // SEND 버튼 클릭 시 작동
  const doSend = () => {
    onClose({ close: false, sendStatus: true });
  };

  // CANCEL 버튼 클릭 시 작동
  const doCancle = () => {
    onClose({ close: false, sendStatus: false });
  };

  return (
    <div
      className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
      id="modal-id"
    >
      <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
      <div className="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
        <div>
          <div className="text-center p-5 flex-auto justify-center">
            <h2 className="text-xl font-bold py-4 ">그룹 초대하기</h2>
            <p className="text-sm text-gray-500 px-8">
              그룹에 초대하여 함께 활동하겠습니까?
            </p>
          </div>
          <div className="p-3  mt-2 text-center space-x-4 md:block">
            <button
              onClick={doSend}
              className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
            >
              SEND
            </button>
            <button
              onClick={doCancle}
              className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600"
            >
              CANCLE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
