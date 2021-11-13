import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';

export default function LoadingButtonsTransition() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }

  return (
    <LoadingButton
      onClick={handleClick}
      endIcon={<SendIcon />}
      loading={loading}
      loadingPosition="end"
      variant="contained"
    >
      Send
    </LoadingButton>
  );
}
