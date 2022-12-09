import Link from 'next/link'
import { useRouter } from 'next/router';
import { useState } from 'react'

export default function SignUpForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter()

    const onSubmit = () => {
        const userForm = {
            name,
            email,
            password
        };

        localStorage.setItem('user-form', JSON.stringify(userForm))
        router.push('/sign-up-photo')
    } 
  return (
    <>
    <div className="pt-50">
                    <label className="form-label text-lg fw-medium color-palette-1 mb-10">Full Name</label>
                    <input 
                        type="text" 
                        className="form-control rounded-pill text-lg" 
                        placeholder="Enter your name"
                        aria-describedby='name'
                        value={name}
                        onChange={(event) => setName(event.target.value)} 
                    />
                </div>
                <div className="pt-30">
                    <label className="form-label text-lg fw-medium color-palette-1 mb-10">Email Address</label>
                    <input type="email" 
                        className="form-control rounded-pill text-lg" 
                        aria-describedby="email" 
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="pt-30">
                    <label className="form-label text-lg fw-medium color-palette-1 mb-10">Password</label>
                    <input type="password" 
                        className="form-control rounded-pill text-lg"
                        placeholder="Your password" 
                        aria-describedby='password'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div className="button-group d-flex flex-column mx-auto pt-50">
                    <button 
                        type='button' 
                        className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16" 
                        role="button"
                        onClick={onSubmit}
                    >
                    Continue
                    </button>
                    
                    <Link href="/sign-in">
                    <a className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill" role="button">Sign In</a>
                    </Link>
                    
                </div>
    </>
  )
}
