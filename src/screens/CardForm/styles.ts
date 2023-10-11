import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0px ${({theme}) => theme.size.padding};
`;

export const FormContainer = styled.View`
  width: 100%;
  margin-bottom: ${RFPercentage(8)}px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Column = styled.View`
  flex: 0.48;
`;

export const CameraButton = styled.TouchableOpacity`
  background: ${({theme}) => theme.colors.turqBlue};
  width: ${RFPercentage(4)}px;
  height: ${RFPercentage(4)}px;
  border-radius: ${RFPercentage(4)}px;
  align-items: center;
  justify-content: center;
`;
