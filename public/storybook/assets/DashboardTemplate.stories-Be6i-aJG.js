import{$ as e,X as t,t as n}from"./iframe-BLzmbQz7.js";import{n as r,t as i}from"./input-D4_qrV13.js";var a=e(t()),o=n();function s({className:e,...t}){return(0,o.jsx)(`div`,{"data-slot":`table-container`,className:`relative w-full overflow-x-auto`,children:(0,o.jsx)(`table`,{"data-slot":`table`,className:r(`w-full caption-bottom text-sm`,e),...t})})}function c({className:e,...t}){return(0,o.jsx)(`thead`,{"data-slot":`table-header`,className:r(`[&_tr]:border-b`,e),...t})}function l({className:e,...t}){return(0,o.jsx)(`tbody`,{"data-slot":`table-body`,className:r(`[&_tr:last-child]:border-0`,e),...t})}function u({className:e,...t}){return(0,o.jsx)(`tfoot`,{"data-slot":`table-footer`,className:r(`bg-muted/50 border-t font-medium [&>tr]:last:border-b-0`,e),...t})}function d({className:e,...t}){return(0,o.jsx)(`tr`,{"data-slot":`table-row`,className:r(`hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors`,e),...t})}function f({className:e,...t}){return(0,o.jsx)(`th`,{"data-slot":`table-head`,className:r(`text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]`,e),...t})}function p({className:e,...t}){return(0,o.jsx)(`td`,{"data-slot":`table-cell`,className:r(`p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]`,e),...t})}function m({className:e,...t}){return(0,o.jsx)(`caption`,{"data-slot":`table-caption`,className:r(`text-muted-foreground mt-4 text-sm`,e),...t})}s.__docgenInfo={description:``,methods:[],displayName:`Table`},c.__docgenInfo={description:``,methods:[],displayName:`TableHeader`},l.__docgenInfo={description:``,methods:[],displayName:`TableBody`},u.__docgenInfo={description:``,methods:[],displayName:`TableFooter`},f.__docgenInfo={description:``,methods:[],displayName:`TableHead`},d.__docgenInfo={description:``,methods:[],displayName:`TableRow`},p.__docgenInfo={description:``,methods:[],displayName:`TableCell`},m.__docgenInfo={description:``,methods:[],displayName:`TableCaption`};function h({items:e,className:t}){return(0,o.jsx)(`dl`,{className:r(`flex divide-x divide-border rounded-xl border bg-card overflow-hidden`,t),children:e.map(e=>(0,o.jsxs)(`div`,{className:`flex flex-1 flex-col items-center gap-0.5 px-3 py-3`,children:[(0,o.jsx)(`dt`,{className:`text-[11px] font-medium uppercase tracking-wide text-muted-foreground`,children:e.label}),(0,o.jsx)(`dd`,{className:r(`text-2xl font-bold tabular-nums leading-none tracking-tight`,e.accent&&`text-primary`),children:e.value})]},e.label))})}function g({title:e,value:t,className:n}){return(0,o.jsxs)(`div`,{className:r(`flex flex-1 flex-col items-center gap-0.5 rounded-xl border bg-card px-3 py-3 min-w-[80px]`,n),children:[(0,o.jsx)(`span`,{className:`text-[11px] font-medium uppercase tracking-wide text-muted-foreground`,children:e}),(0,o.jsx)(`span`,{className:`text-2xl font-bold tabular-nums leading-none tracking-tight`,children:t})]})}h.__docgenInfo={description:`StatBar — горизонтальная строка с числовой статистикой.
Заменяет повторяющийся hero-metrics шаблон StatCard.`,methods:[],displayName:`StatBar`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`StatBarItem`}],raw:`StatBarItem[]`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}},g.__docgenInfo={description:``,methods:[],displayName:`StatCard`,props:{title:{required:!0,tsType:{name:`string`},description:``},value:{required:!0,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:``},className:{required:!1,tsType:{name:`string`},description:``}}};function _({title:e,stats:t,items:n,isLoading:r=!1}){let[u,m]=(0,a.useState)(``),g=(0,a.useMemo)(()=>{let e=u.toLowerCase();return n.filter(t=>`${t.lastName} ${t.name}`.toLowerCase().includes(e)||t.pin.includes(e)).sort((e,t)=>e.lastName.localeCompare(t.lastName,`ru`))},[n,u]);return(0,o.jsxs)(`div`,{className:`space-y-6`,children:[(0,o.jsx)(`div`,{className:`flex items-center justify-between`,children:(0,o.jsx)(`h1`,{className:`text-2xl font-bold tracking-tight`,children:e})}),(0,o.jsx)(h,{className:`max-w-2xl mx-auto w-full`,items:[{label:`Всего`,value:t.total},{label:`Отсутствуют`,value:t.out},{label:`Присутствуют`,value:t.in,accent:!0}]}),(0,o.jsx)(`div`,{className:`flex gap-4 max-w-2xl mx-auto w-full`,children:(0,o.jsx)(i,{"aria-label":`Поиск по ID или ФИО`,placeholder:`Поиск по ID или ФИО...`,value:u,onChange:e=>m(e.target.value)})}),(0,o.jsx)(`div`,{className:`grid gap-3`,children:(0,o.jsxs)(s,{children:[(0,o.jsx)(c,{children:(0,o.jsxs)(d,{children:[(0,o.jsx)(f,{className:`text-center`,children:`ID`}),(0,o.jsx)(f,{className:`text-center`,children:`ФИО`}),(0,o.jsx)(f,{className:`text-center`,children:`Статус`})]})}),(0,o.jsx)(l,{children:r?(0,o.jsx)(d,{children:(0,o.jsx)(p,{colSpan:3,className:`text-center h-24`,children:(0,o.jsxs)(`output`,{"aria-live":`polite`,className:`flex items-center justify-center gap-2 text-muted-foreground`,children:[(0,o.jsx)(`div`,{className:`h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent`,"aria-hidden":`true`}),(0,o.jsx)(`span`,{children:`Загрузка...`})]})})}):g.length===0?(0,o.jsx)(d,{children:(0,o.jsx)(p,{colSpan:3,className:`text-center h-24`,children:`Нет данных`})}):g.map(e=>(0,o.jsxs)(d,{children:[(0,o.jsx)(p,{className:`font-medium`,children:e.pin}),(0,o.jsx)(p,{children:`${e.lastName} ${e.name}`}),(0,o.jsx)(p,{children:e.isInside?`Внутри`:`Снаружи`})]},e.pin))})]})})]})}_.__docgenInfo={description:``,methods:[],displayName:`DashboardTemplate`,props:{isLoading:{defaultValue:{value:`false`,computed:!1},required:!1}}};var{expect:v,userEvent:y,within:b}=__STORYBOOK_MODULE_TEST__,x={title:`Таблица сотрудников`,component:_,tags:[`autodocs`],parameters:{docs:{description:{component:`Универсальный шаблон дашборда присутствия сотрудников. Отображает статистику, поиск по ФИО/ID и таблицу со статусами в реальном времени.`}}}},S=[{id:1,pin:`1001`,name:`Иван`,lastName:`Иванов`,isInside:!0},{id:2,pin:`1002`,name:`Петр`,lastName:`Петров`,isInside:!1},{id:3,pin:`1003`,name:`Сидор`,lastName:`Сидоров`,isInside:!0},{id:4,pin:`1004`,name:`Алексей`,lastName:`Алексеев`,isInside:!1},{id:5,pin:`1005`,name:`Мария`,lastName:`Маринина`,isInside:!0}],C={total:5,in:3,out:2};const w={name:`Стандартный`,args:{title:`Дашборд сотрудников`,stats:C,items:S,isLoading:!1}},T={name:`Загрузка`,args:{title:`Дашборд сотрудников`,stats:{total:0,in:0,out:0},items:[],isLoading:!0}},E={name:`Пустой`,args:{title:`Дашборд сотрудников`,stats:{total:0,in:0,out:0},items:[],isLoading:!1}},D={name:`Поиск`,args:{title:`Дашборд сотрудников`,stats:C,items:S,isLoading:!1},play:async({canvasElement:e})=>{let t=b(e),n=t.getByPlaceholderText(/Поиск по ID или ФИО/i);await y.type(n,`Иванов`),await v(t.getByText(/Иванов Иван/i)).toBeInTheDocument(),await v(t.queryByText(/Петров Петр/i)).not.toBeInTheDocument(),await y.clear(n),await v(t.getByText(/Петров Петр/i)).toBeInTheDocument(),await y.type(n,`1003`),await v(t.getByText(/Сидоров Сидор/i)).toBeInTheDocument(),await v(t.queryByText(/Иванов Иван/i)).not.toBeInTheDocument()}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Стандартный',
  args: {
    title: 'Дашборд сотрудников',
    stats: MOCK_STATS,
    items: MOCK_ITEMS,
    isLoading: false
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Загрузка',
  args: {
    title: 'Дашборд сотрудников',
    stats: {
      total: 0,
      in: 0,
      out: 0
    },
    items: [],
    isLoading: true
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Пустой',
  args: {
    title: 'Дашборд сотрудников',
    stats: {
      total: 0,
      in: 0,
      out: 0
    },
    items: [],
    isLoading: false
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Поиск',
  args: {
    title: 'Дашборд сотрудников',
    stats: MOCK_STATS,
    items: MOCK_ITEMS,
    isLoading: false
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const searchInput = canvas.getByPlaceholderText(/Поиск по ID или ФИО/i);

    // Test searching by name
    await userEvent.type(searchInput, 'Иванов');
    await expect(canvas.getByText(/Иванов Иван/i)).toBeInTheDocument();
    await expect(canvas.queryByText(/Петров Петр/i)).not.toBeInTheDocument();

    // Clear search
    await userEvent.clear(searchInput);
    await expect(canvas.getByText(/Петров Петр/i)).toBeInTheDocument();

    // Test searching by PIN
    await userEvent.type(searchInput, '1003');
    await expect(canvas.getByText(/Сидоров Сидор/i)).toBeInTheDocument();
    await expect(canvas.queryByText(/Иванов Иван/i)).not.toBeInTheDocument();
  }
}`,...D.parameters?.docs?.source}}};const O=[`Default`,`Loading`,`Empty`,`SearchTest`];export{w as Default,E as Empty,T as Loading,D as SearchTest,O as __namedExportsOrder,x as default};