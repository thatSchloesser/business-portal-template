import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Label = ({ label, children }) => {
  return (
    <>
      <Grid container>
        <Grid item sm={3} xs={12}>
          <ListItem>
            <ListItemText>{label} </ListItemText>
          </ListItem>
        </Grid>
        <Grid item sm={9} xs={12}>
          {/* kind of strange that a graph lets us stick this inline, but hey why not */}
          {/* <ListItem pt={0} style={{ 'padding-top': '0' }}> */}
          <ListItem>{children}</ListItem>
        </Grid>
      </Grid>
    </>
  );
};

export default Label;
