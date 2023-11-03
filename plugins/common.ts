export default defineNuxtPlugin(async () => {
  const data:any = useState('data')
  if (!data.value) {
    data.value = await Promise.all([
      $fetch('https://api.storyblok.com/v2/cdn/stories?token=FI7sOPfkor9QvXYtVZPVDAtt&starts_with=block'),
      $fetch('https://api.storyblok.com/v2/cdn/stories?token=FI7sOPfkor9QvXYtVZPVDAtt&starts_with=header'),
      $fetch('https://api.storyblok.com/v2/cdn/stories?token=FI7sOPfkor9QvXYtVZPVDAtt&starts_with=footer'),
    ]).then((res:any) => {
      return res.map((item:any) => {
        return item.stories
      }).flat()
    }).catch((error) => {
      throw new Error(error)
    })
  }
})
