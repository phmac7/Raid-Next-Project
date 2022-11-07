import { BasicInfo } from '@/components/atoms';
import { UserExpanded, UserGames } from '@/components/molecules';
import type { NextPage } from 'next';

const Profile: NextPage = () => {
    return (
        <div>
            <UserExpanded />
            <BasicInfo />
            {/* Lista de Posts*/}
            <UserGames />
        </div>
    )
}