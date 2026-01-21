export const signUp = async (userData) => {
    return {data, error} = await supabase.auth.signUp(userData)
}
export const logIn = async (userData) => {
    return {data, error} = await supabase.auth.signInWithOtp(userData)

}
export const logOut = async () => {
    return { error } = await supabase.auth.signOut()
}