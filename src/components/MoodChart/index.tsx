import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { useSelector } from '../../state/store';
import { selectSortedMoodTypes } from '../../state/selectors/moodTypesSelector';
import { Font } from '../../constants/theme';
import BaseText from '../Base/Text';
import ChartBar from './ChartBar';
import CountCircle, { circleWidthPx, circleMargin } from './CountCircle';

const windowWidth = Dimensions.get('window').width;
const widthPerc = 90;
const maxBarWidth =
  (windowWidth * widthPerc) / 100 - circleWidthPx - circleMargin;

const Container = styled.View`
  align-self: center;
  width: ${widthPerc}%;
  margin-top: 16px;
`;

const Content = styled.View`
  margin-top: 18px;
`;

const ChartItem = styled.View`
  flex-direction: column;
`;

const InlineContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Title = styled(BaseText)`
  font-family: ${Font.Italic};
`;

const BarTitle = styled(BaseText)`
  font-family: ${Font.SemiBold};
  text-align: left;
`;

const MoodCart: React.FC = () => {
  const sortedMoodTypes = useSelector(selectSortedMoodTypes);

  const maxValue = sortedMoodTypes[0]?.total || 0;

  if (maxValue === 0) {
    return null;
  }

  return (
    <Container>
      <Title>See your results here!</Title>
      <Content>
        {sortedMoodTypes.map((type) => (
          <ChartItem key={`bar-field-${type.id}`}>
            <BarTitle>{type.id}</BarTitle>
            <InlineContainer>
              <ChartBar
                width={(maxBarWidth * type.total) / (maxValue || 1)}
                values={type.values}
                total={type.total}
              />
              <CountCircle value={type.total} />
            </InlineContainer>
          </ChartItem>
        ))}
      </Content>
    </Container>
  );
};

export default MoodCart;
