import { Box } from 'components/Box';
import styled from 'styled-components';

export const StyledContactList = styled(Box).attrs({
  as: 'ul',
})``;

export const StyledContactListItem = styled.li`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};

  &:not(:first-child) {
    margin-top: ${({ theme }) => `${theme.space[2]}px`};
  }

  &:before {
    content: '-';

    margin-right: ${({ theme }) => `${theme.space[1]}px`};
  }
`;

export const StyledContactListButton = styled.button`
  display: flex;
  align-items: center;

  margin-left: ${({ theme }) => `${theme.space[2]}px`}; ;
`;