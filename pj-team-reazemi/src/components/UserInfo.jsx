import styled from "styled-components";

const UserInfoArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 30px;
  background-color: #0094e5;
  color: #fff;
  font-size: 24px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserInfo = () => {
  return (
    <UserInfoArea>
      <p>ようこそ、Adminさん</p>
      <FlexContainer style={{ gap: "30px" }}>
        <p>所有MT:10000P</p>
        <ShoppingCart />
        <History />
      </FlexContainer>
    </UserInfoArea>
  );
};

export default UserInfo;

const ShoppingCart = () => {
  return (
    <FlexContainer>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.2916 26.75C26.0651 26.75 26.807 27.0572 27.354 27.6042C27.901 28.1512 28.2083 28.8931 28.2083 29.6666C28.2083 30.4402 27.901 31.182 27.354 31.729C26.807 32.276 26.0651 32.5833 25.2916 32.5833C24.518 32.5833 23.7762 32.276 23.2292 31.729C22.6822 31.182 22.3749 30.4402 22.3749 29.6666C22.3749 28.0479 23.6728 26.75 25.2916 26.75ZM1.95825 3.41663H6.727L8.09784 6.33329H29.6666C30.0534 6.33329 30.4243 6.48694 30.6978 6.76043C30.9713 7.03392 31.1249 7.40485 31.1249 7.79163C31.1249 8.03954 31.052 8.28746 30.9499 8.52079L25.7291 17.9562C25.2333 18.8458 24.2708 19.4583 23.177 19.4583H12.3124L10.9999 21.8354L10.9562 22.0104C10.9562 22.1071 10.9946 22.1998 11.063 22.2682C11.1313 22.3365 11.2241 22.375 11.3208 22.375H28.2083V25.2916H10.7083C9.9347 25.2916 9.19284 24.9843 8.64586 24.4374C8.09888 23.8904 7.79159 23.1485 7.79159 22.375C7.79159 21.8645 7.92283 21.3833 8.14159 20.975L10.1249 17.402L4.87492 6.33329H1.95825V3.41663ZM10.7083 26.75C11.4818 26.75 12.2237 27.0572 12.7706 27.6042C13.3176 28.1512 13.6249 28.8931 13.6249 29.6666C13.6249 30.4402 13.3176 31.182 12.7706 31.729C12.2237 32.276 11.4818 32.5833 10.7083 32.5833C9.9347 32.5833 9.19284 32.276 8.64586 31.729C8.09888 31.182 7.79159 30.4402 7.79159 29.6666C7.79159 28.0479 9.0895 26.75 10.7083 26.75ZM23.8333 16.5416L27.8874 9.24996H9.45409L12.8958 16.5416H23.8333Z"
          fill="white"
        />
      </svg>
      <p>買い物かご</p>
    </FlexContainer>
  );
};

const History = () => {
  return (
    <FlexContainer>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.4583 4.875C15.9773 4.875 12.6389 6.25781 10.1775 8.71922C7.71606 11.1806 6.33325 14.519 6.33325 18H1.95825L7.63117 23.6729L7.73325 23.8771L13.6249 18H9.24992C9.24992 12.3562 13.8145 7.79167 19.4583 7.79167C25.102 7.79167 29.6666 12.3562 29.6666 18C29.6666 23.6437 25.102 28.2083 19.4583 28.2083C16.6437 28.2083 14.0916 27.0562 12.2541 25.2042L10.1833 27.275C11.3985 28.4974 12.8437 29.4669 14.4357 30.1277C16.0276 30.7885 17.7346 31.1275 19.4583 31.125C22.9392 31.125 26.2776 29.7422 28.739 27.2808C31.2004 24.8194 32.5833 21.481 32.5833 18C32.5833 14.519 31.2004 11.1806 28.739 8.71922C26.2776 6.25781 22.9392 4.875 19.4583 4.875ZM17.9999 12.1667V19.4583L24.1978 23.1333L25.3208 21.2667L20.1874 18.2187V12.1667H17.9999Z"
          fill="white"
        />
      </svg>
      <p>購入履歴</p>
    </FlexContainer>
  );
};