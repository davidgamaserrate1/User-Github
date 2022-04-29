import {
    Section,
    Title,
    Container,
    AvatarPic
} from './styles'
import FollowInfo from '../../components/userInfo';
const Following = props => (
    <Section>
        <Title> Seguindo de '<a>#{props.nameProfile}</a>' </Title> {console.log(props.following)}
        {(props.following).map(follow => (
            <Container>
                <AvatarPic src={follow.avatar_url} alt={follow.alternativeText}></AvatarPic>
                <p>#{follow?.login}</p>
                <FollowInfo ></FollowInfo>

            </Container>
        ))}
    </Section>

);


export default Following;