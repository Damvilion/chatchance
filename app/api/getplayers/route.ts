import { NextResponse } from 'next/server';
import { redisClient } from '@/app/lib/redis';

export async function POST(request: Request) {
    const allUsers = await redisClient.sMembers('online_users');

    return NextResponse.json({
        message: 'Success',
        allUsers,
    });
}
