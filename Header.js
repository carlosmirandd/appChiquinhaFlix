import { Appbar } from 'react-native-paper';

const Header = ({title}) => (
    <Appbar.Header>
       <Appbar.Content title={title} />
    </Appbar.Header>
);

export default Header;