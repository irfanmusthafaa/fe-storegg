import { useEffect, useState } from "react";
import InputForm from "../../components/atoms/InputForm";
import SideBar from "../../components/organism/Sidebar";
import jwtDecode from "jwt-decode";
import { JWTPayloadTypes, UserTypes } from "../../services/data-types";
import Cookies from "js-cookie";
import { updateProfile } from "../../services/member";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

interface UserStateTypes {
    id: string;
    name: string;
    email: string;
    avatar: any;
    phoneNumber: string;
  }

export default function EditProfile() {
    const [user, setUser] = useState<UserStateTypes>({
        id: '',
        name: '',
        email: '',
        avatar: '',
        phoneNumber: '',
      });

    const [imagePreview, setImagePreview] = useState('/');

    const router = useRouter();

    useEffect(() => {
        const token = Cookies.get('token')
        if(token){
            const jwtToken = atob(token);
            const payload: JWTPayloadTypes = jwtDecode(jwtToken)
            const userFromPayload: UserTypes = payload.player;
            const IMG = process.env.NEXT_PUBLIC_IMG;
            userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`
            setUser(userFromPayload)
        }
    }, [])

    const onSubmit = async() => {
        const data = new FormData();
        data.append('image', user.avatar)
        data.append('name', user.name)

        const response = await updateProfile(data, user.id)
        if(response.error){
            toast.error(response.message)
        }else{
            Cookies.remove('token')
            router.push('/sign-in')
        }
    }

    return (
      <>
      <SideBar activeMenu="settings" />
     <section className="edit-profile overflow-auto">
        <main className="main-wrapper">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
                <div className="bg-card pt-30 ps-30 pe-30 pb-30">
                    <form action="">
                        <div className="photo d-flex">
                            <div className="image-upload">
                                <label htmlFor="avatar">
                                    {imagePreview ? (
                                        <img src={imagePreview} width={90} height={90} style={{ borderRadius: '100%' }} alt="icon-upload"/>
                                    ) : (
                                        <img src={user.avatar} width={90} height={90} style={{ borderRadius: '100%' }} alt="icon-upload"/>
                                    )}
                                </label>
                                <input 
                                id="avatar" 
                                type="file" 
                                name="avatar" 
                                accept="image/png, image/jpeg" 
                                onChange={(event) => {
                                    const img = event.target.files![0]
                                    setImagePreview(URL.createObjectURL(img))
                                    return setUser({
                                        ...user,
                                        avatar: img
                                    })
                                }}/>
                            </div>
                        </div>
                        <div className="pt-30">
                            <InputForm 
                            value={user.name} 
                            label="Full Name"
                            onChange={(event) => setUser({
                                ...user,
                                name: event.target.value
                            })}
                             />
                        </div>
                        <div className="pt-30">
                            <InputForm 
                            value={user.email} 
                            label="Email Address" 
                            disabled 
                            onChange={(event) => setUser({
                                ...user,
                                email: event.target.value
                            })}
                            />
                        </div>
                        <div className="button-group d-flex flex-column pt-50">
                            <button 
                            type="button" 
                            className="btn btn-save fw-medium text-lg text-white rounded-pill"
                            onClick={onSubmit}
                            >
                            Save My Profile</button>
                        </div>
                    </form>

                </div>


            </div>
           
        </main>
    </section>
    
      </>
    )
  }
  

  interface GetServerSideProps {
    req: {
      cookies : {
        token: string;
      }
    }
  }
  
  export async function getServerSideProps({req} : GetServerSideProps) {
    const { token } = req.cookies;
  
    if(!token){
      return{
        redirect:{
          destination: '/sign-in',
          permanent: false,
        }
      }
    }
  
    const jwtToken = Buffer.from(token, 'base64').toString('ascii');
    const payload: JWTPayloadTypes = jwtDecode(jwtToken)
    const userFromPayload: UserTypes = payload.player;
    const IMG = process.env.NEXT_PUBLIC_IMG;
    userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`
          
  
    return{
      props: {
        user: userFromPayload, 
      }
    }
  }