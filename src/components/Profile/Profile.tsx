import { ProfileInfo } from './MyPosts/ProfileInfo/ProfileInfo'
import { MyPostsContainer } from './MyPosts/MyPostsContainer'
import { ProfileInfoType } from '../../redux/profileReducer'


type ProfilePropsType = {
  profile: ProfileInfoType | null
  status: string | null
  updateStatus: (status: string | null) => void
}

export function Profile(props: ProfilePropsType) {

  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
      <MyPostsContainer />
    </div>
  )
}
