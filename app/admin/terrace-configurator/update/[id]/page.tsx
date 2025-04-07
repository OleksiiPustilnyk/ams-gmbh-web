import { testTerraceConfig } from '../../page'
import UpdateTerraceConfigView from '@/view/admin-panel/terrace-config/update-terrace-config'

// interface UpdateTerraceConfigPageProps {
//     params: { id: string }
// }

export default async function UpdateTerraceConfigPage() {
    // const { id } = params
    // to do fetch
    // const terraceConfig = await fetchTerraceConfigById(id)
    const terraceConfig = testTerraceConfig[0]

    return <UpdateTerraceConfigView terraceConfig={terraceConfig} />
}
