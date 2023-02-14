import { toast } from 'react-toastify';

const Notification = {
    warning: message => toast.warning(message),
};

export default Notification;