import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import CardHeader from '@material-ui/core/CardHeader';

export default function Note({ note }) {
  return (
    <div>
      <Card>
        <CardHeader title={note.title} />
        <CardContent>{note.content}</CardContent>
        <CardActions>
          <Button color='primary' size='small'>
            edit
          </Button>
          <Button color='primary' size='small'>
            delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
