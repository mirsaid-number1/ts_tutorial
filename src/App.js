import {BrowserRouter,Route, Routes} from 'react-router-dom'
import './App.css';
import Home_page from './components/first_lesson/Home.page';
import OWSuperHeroes from './components/first_lesson/OWSuperHeroes';
import RQSuperHeroes from './components/first_lesson/RQSuperHeroes';
import {QueryClientProvider,QueryClient} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools'
import RQSuperHero from './components/second_lesson/RQSuperHero';
import ParallelQueries from './components/second_lesson/ParallelQueries';
import DynamicParallelQueries from './components/second_lesson/DynamicParallelQueries';
import DependentQuery from './components/second_lesson/DependentQuery';
import SuperheroDetail from './components/second_lesson/SuperheroDetail';
import PaginatedColors from './components/second_lesson/PaginatedColors';
import InfiniteQuery from './components/second_lesson/InfiniteQuery';
import MutationPostRequest from './components/second_lesson/MutationPostRequest';

const queryClient = new QueryClient();

function App() {
  return (<QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Home_page />
    <div className="App"> 
     <Routes>
      <Route path='/ordinaryDataFetching' element={<OWSuperHeroes />}/>
      <Route path='/reactQueryDataFetching' element={<RQSuperHeroes />} />
      <Route path='/hero_detail/:id' element={<RQSuperHero />} />
      <Route path='/parallel_queries' element={<ParallelQueries />} />
      <Route path='/dynamic_parallel_queries' element={<DynamicParallelQueries />} />
      <Route path='/dependent_query' element={<DependentQuery />} />
      <Route path='/superhero_detail/:heroId' element={<SuperheroDetail />} />
      <Route path='/paginated_colors' element={<PaginatedColors />} />
      <Route path='/infinite_query' element={<InfiniteQuery />} />
      <Route path='/post_request' element={<MutationPostRequest />} />
     </Routes>
    </div>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
    </QueryClientProvider>
  );
}

export default App;
