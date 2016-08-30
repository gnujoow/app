import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class Follower extends React.Component {
  render(){
    return (
      <Card>
        <CardHeader
          title="여기에 이름이 들어가고"
          subtitle="여기에 학교가 들어가고"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardActions>
          <FlatButton label="페북" />
          <FlatButton label="깃헙" />
          <FlatButton label="링크드인" />
          <FlatButton label="인스타" />
        </CardActions>
        <CardText expandable={true}>
          여기에 한줄 소개가 들어가면 되겠지
        </CardText>
      </Card>
    )
  }
}
