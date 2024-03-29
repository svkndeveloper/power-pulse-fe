import styled from '@emotion/styled';

export const NoticeArea = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
`;

export const NoticeIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: #efa082;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WarningIcon = styled.svg({
    width: '16px',
    height: '16px',
});

export const NoticeMessage = styled.div`
  width: 100%;
  height: auto;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;