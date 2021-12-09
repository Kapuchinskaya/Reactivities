import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponents";
import { useStore } from "../../../app/stores/store";

interface Props {
  match: {
    params: {
      id?: string;
    };
  };
}

const ActivityDetails = (props: Props) => {
  const { activityStore } = useStore();

  const {
    selectedActivity: activity,
    loadActivity,
    loadingInitial,
  } = activityStore;

  const id = props.match.params.id;

  useEffect(() => {
    if (id) {
      loadActivity(id);
    }
  }, [id, loadActivity]);

  return loadingInitial || !activity ? (
    <LoadingComponent />
  ) : (
    <Card fluid>
      <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span>{activity.date}</span>
        </Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths="2">
          <Button
            as={Link}
            to={`/manage/${activity.id}`}
            basic
            color="blue"
            content="Edit"
          />
          <Button
            as={Link}
            to="/activities"
            basic
            color="grey"
            content="Cancel"
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

export default withRouter(observer(ActivityDetails));
