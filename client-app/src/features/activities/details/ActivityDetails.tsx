import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponents";
import { useStore } from "../../../app/stores/store";
import ActivityDetailedChat from "./ActivityDetailedChat";
import ActivityDetailedHeader from "./ActivityDetailedHeader";
import ActivityDetailedInfo from "./ActivityDetailedInfo";
import ActivityDetailedSidebar from "./ActivityDetailedSidebar";

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
    clearSelectedActivity,
  } = activityStore;

  const id = props.match.params.id;

  useEffect(() => {
    if (id) {
      loadActivity(id);
      return () => clearSelectedActivity();
    }
  }, [id, loadActivity, clearSelectedActivity]);

  return loadingInitial || !activity ? (
    <LoadingComponent />
  ) : (
    <Grid>
      <Grid.Column width={10}>
        <ActivityDetailedHeader activity={activity} />
        <ActivityDetailedInfo activity={activity} />
        <ActivityDetailedChat activityId={activity.id} />
      </Grid.Column>
      <Grid.Column width={6}>
        <ActivityDetailedSidebar activity={activity} />
      </Grid.Column>
    </Grid>
  );
};

export default withRouter(observer(ActivityDetails));
