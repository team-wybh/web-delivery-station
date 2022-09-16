import styled from 'styled-components';

export const Wrap = styled.div`
  max-width: 340px;
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
`;
export const Header = styled.div`
  display: inline-block;
  margin-bottom: 10px;
  padding: 10px 14px;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: -0.02em;
  background: #fff;
  box-shadow: 1px 3px 6px rgba(40, 40, 40, 0.16);
  border-radius: 900px;

  em {
    color: #2E8AF7;
  }
`;
export const SlideWrap = styled.div`
  .swiper {
    max-height: 284px;
  }
`;

interface Zone {
  active: boolean;
}

export const Zone = styled.div<Zone>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  background: ${({ active }) => (active ? '#20232A' : '#fff')};
  box-shadow: 1px 3px 6px rgba(40, 40, 40, 0.36);
  border-radius: 20px;
  color: ${({ active }) => (active ? '#fff' : '#20232A')};
  letter-spacing: -0.02em;
  cursor: pointer;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 5px;
  line-height: 25px;
`;
export const AddressWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
`;

export const Address = styled.address`
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 4px;
  font-weight: 400;
  font-size: 13px;
  color: #97979D;
`;

export const CopyButton = styled.button`
  position: relative;
  margin: 0;
  padding: 0;
  cursor: pointer;
  border: 0;
  background: transparent;

  &:hover:after {
    display: block;
  }

  &:after {
    display: none;
    position: absolute;
    transform: translate(-64px, -25px);
    bottom: 0;
    content: '';
    width: 144px;
    height: 37px;
    background: url("/images/copy-text.png") no-repeat;
    background-size: cover;
  }
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 13px;
  letter-spacing: -0.02em;
`;


export const Button = styled.button<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 52px;
  height: 52px;
  border-radius: 50%;
  background: ${({ active }) => (active ? '#36EDC1' : '#F3F3F4')};
  font-weight: 700;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #20232A;
  border: 0;
`;