import 'babel-polyfill'
import { mainPage } from '../index'

// https://medium.com/@pojotorshemi/integration-test-on-express-restful-apis-using-jest-and-supertest-4cf5d1414ab0



  describe("cheking routing...", () => {
    it("Successful GET REQUEST", async () => {
      const { status } = await request(mainPage).get('/dist/index.html')
      // const { status } = await request(app).post('/api/analyze')

      expect(status).toBe(200)
    })
  })

      