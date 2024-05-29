import React, { useEffect, useState } from 'react'
import { getUserData } from '../../api/getUserData'
import { User } from '@supabase/supabase-js'
import supabase from '../../../types/supabaseClient'

export const UserData = () => {

  const [data, setData] = useState()

  useEffect(() => {
    getUserData().then(async (data) => {
      if (data) {
        const { data: users, error } = await supabase
          .from('users')
          .select("*")
          // Filters
          .eq('id', data.id)
        setData(users ? users[0] : null)
      }
    })
  }, [])
  console.log(data)
  return (
    <div>UserData</div>
  )
}
