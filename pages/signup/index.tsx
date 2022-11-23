import styles from './signup.module.scss';
import bg from '../../public/assets/background.png';
import LogoFull from '@/components/atoms/Icons/Logo/LogoFull';
import { At, GoogleLogo, LockSimple, User } from 'phosphor-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormEvent } from 'react';

const Signup = () => {
  const router = useRouter();

  const signUpHandler = (event: FormEvent) => {
    event.preventDefault();
    router.replace('/');
  };

  return (
    <div
      className={styles.signupPage}
      style={{
        background: `url(${bg.src}) no-repeat center`,
        backgroundSize: 'cover',
        height: '100vh',
      }}
    >
      <header className={styles['signupPage__header']}>
        <LogoFull width="195" height="40" />
      </header>
      <div className={styles['signupPage__signupFormContainer']}>
        <div className={styles['signupPage__titleContainer']}>
          <h2 className={styles['signupPage__title']}>Getting Started</h2>
          <span className={styles['signupPage__subtitle']}>
            Create an account and connect to other players.
          </span>
        </div>
        <form className={styles['signupPage__signupForm']} action="">
          <label className={styles['signupPage__label']} htmlFor="name">
            Name
          </label>
          <div className={styles['signupPage__inputContainer']}>
            <User size={24} className={styles['signupPage__icon']} />
            <input
              className={styles['signupPage__input']}
              type="name"
              name="name"
              id="name"
              placeholder="Vault Boy"
            />
          </div>
          <label className={styles['signupPage__label']} htmlFor="email">
            Email
          </label>
          <div className={styles['signupPage__inputContainer']}>
            <At size={24} className={styles['signupPage__icon']} />
            <input
              className={styles['signupPage__input']}
              type="email"
              name="email"
              id="email"
              placeholder="example@valtech.com"
            />
          </div>
          <div className={styles['signupPage__passwordContainer']}>
            <div className={styles['signupPage__passwordInputLabelContainer']}>
              <label className={styles['signupPage__label']} htmlFor="password">
                Password
              </label>
              <div className={styles['signupPage__inputContainer']}>
                <LockSimple size={24} className={styles['signupPage__icon']} />
                <input
                  className={styles['signupPage__input']}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="********"
                />
              </div>
            </div>
            <div className={styles['signupPage__passwordInputLabelContainer']}>
              <label className={styles['signupPage__label']} htmlFor="password">
                Confirm Password
              </label>
              <div className={styles['signupPage__inputContainer']}>
                <LockSimple size={24} className={styles['signupPage__icon']} />
                <input
                  className={styles['signupPage__input']}
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="********"
                />
              </div>
            </div>
          </div>
          <label className={styles['signupPage__label']} htmlFor="birthday">
            Date of birth
          </label>
          <div className={styles['signupPage__inputDateContainer']}>
            <input
              className={styles['signupPage__birthday']}
              type="date"
              name="birthday"
              id="birthday"
            />
          </div>
          <button
            onClick={signUpHandler}
            type="submit"
            className={styles['signupPage__signupBtn']}
          >
            Sign up
          </button>
        </form>
        <span className={styles['signupPage__divider']}>OR</span>
        <button type="submit" className={styles['signupPage__googleBtn']}>
          <GoogleLogo
            weight="bold"
            size={22}
            className={styles['signupPage__googleIcon']}
          />
          Log in with Google
        </button>
        <span className={styles['signupPage__newAccount']}>
          You don`t have an account?
          <Link href="/login">
            <a className={styles['signupPage__signUp']}> Sign up</a>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Signup;
